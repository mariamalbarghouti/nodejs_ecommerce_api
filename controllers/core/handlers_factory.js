const asyncHandler = require('express-async-handler');
const ApiError = require('../../utils/api_error');
const ApiFeatures = require('../../utils/api_features');
exports.deleteOne = (Model) => asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const doc = await Model.findByIdAndDelete(id);
    if (!doc) {
        return next(new ApiError(`No document found with id: ${id}`, 404));
    }
    res.status(204).json({ status: 'success', data: null });
});

exports.updateOne = (Model) => asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const doc = await Model.findByIdAndUpdate(id, req.body, { new: true });
    if (!doc) {
        return next(new ApiError(`No document found with id: ${id}`, 404));
    }
    res.status(200).json({ status: 'success', data: doc });
});

exports.createOne = (Model) => asyncHandler(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(201).json({ status: 'success', data: doc });
});

exports.getOne = (Model, populateOptions) => asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const doc = await Model.findById(id).populate(populateOptions);
    if (!doc) {
        return next(new ApiError(`No document found with id: ${id}`, 404));
    }
    res.status(200).json({ status: 'success', data: doc });
});

exports.getAll = (Model,modelNameForSerach) => asyncHandler(async (req, res) => {
    let filter = {};
    if (req.filterObject) {
        filter = req.filterObject;
    } 
  const countDocuments = await Model.countDocuments();
  const apiFeatures = new ApiFeatures(
    Model.find(filter)
      .sort({ createdAt: -1 })
    , req.query)
    .pagination(countDocuments)
    .filter()
    .sort()
    .fields()
    .search(modelNameForSerach);
  const documents = await apiFeatures.mongooseQuery;
  res.status(200).json({
    length: documents.length,
    pagination: apiFeatures.paginationResult,
    results: documents,
  });
});
