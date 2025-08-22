class ApiFeatures {
    constructor(mongooseQuery, queryString) {
        this.mongooseQuery = mongooseQuery;
        this.queryString = queryString;
    }
    filter() {
        const queryObj = { ...this.queryString.query };
        const excludedFields = ['page', 'sort', 'limit', 'fields', 'search'];
        excludedFields.forEach(field => delete queryObj[field]);
        const filters = {};
        for (const key in queryObj) {
            if (key.includes('[') && key.includes(']')) {
                // Handle operators like price[gte]
                const fieldName = key.split('[')[0];
                const operator = key.split('[')[1].replace(']', '');
                if (!filters[fieldName]) filters[fieldName] = {};
                filters[fieldName][`$${operator}`] = Number(queryObj[key]);
            } else {
                // Handle regular fields
                filters[key] = queryObj[key];
            }
        }
        this.mongooseQuery = this.mongooseQuery.find(filters);
        return this;
    }
    sort() {
        if (this.queryString.sort) {
            this.mongooseQuery = this.mongooseQuery.sort(this.queryString.sort);
        } else {
            this.mongooseQuery = this.mongooseQuery.sort('-createdAt');
        }
        return this;
    }
    fields() {
        if (this.queryString.fields) {
            const fields = this.queryString.fields.split(',').join(' ');
            this.mongooseQuery = this.mongooseQuery.select(fields);
        } else {
            this.mongooseQuery = this.mongooseQuery.select('-__v');
        }
        return this;
    }
    search(modelName) {
        if (this.queryString.search) {
            console.log(`Searching for: ${this.queryString.search} in model: ${modelName}`);
            let query = {};
            if (modelName === 'Products') {
                query.$or = [
                    { title: { $regex: this.queryString.search, $options: 'i' } },
                    { description: { $regex: this.queryString.search, $options: 'i' } },
                ];
            } else {
                query = { name: { $regex: this.queryString.search, $options: 'i' } };
            }

            this.mongooseQuery = this.mongooseQuery.find(query);
        }
        return this;
    }

    pagination(countDocuments) {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 25;
        const skip = (page - 1) * limit;
        // pagination resultd
        const pagination = {};
        pagination.currentPage = page;
        pagination.limit = limit;
        pagination.totalPages = Math.ceil(countDocuments / limit);
        // pagination.hasNextPage = skip + limit < countDocuments;
        this.mongooseQuery = this.mongooseQuery.skip(skip).limit(limit);
        this.paginationResult = pagination;
        return this;
    }
}
module.exports = ApiFeatures;
