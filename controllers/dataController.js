const IndustryData = require('../modals/dataModal');
const APIFeatures = require('../utils/apiFeatures');

// const fs = require('fs')
// const path = require('path');

// const dataPath = path.join(__dirname, '../jsondata.json');
// const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

exports.getAllIndustryData = async (req, res) => {
    try{
        // excute query
        const features = new APIFeatures(IndustryData.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
        const industryData = await features.query;

        // send response
        res.status(200).json({
            status: 'success',
            results: industryData.length,
            data: {
                industryData
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
};

exports.getIndustryData = async (req, res) => {
    try{
        const industryData = await IndustryData.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                industryData
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }

};

exports.createIndustryData = async (req, res) => {
//     try{
//         await IndustryData.create(data);
//         console.log('data successfully exported')
//         // to exit the process
//         process.exit()
//     } catch (err) {
//         console.log(err);
//         res.status(400).json({
//             status: 'fail',
//             message: err.message
//         })
//     }
    try{
        const newIndustryData = await IndustryData.create(req.body);
        return res.status(201).json({
            status: 'success',
            data: {
                industryData: newIndustryData
            }
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
};

exports.updateIndustryData =async (req, res) => {
    try{
        const industryData = await IndustryData.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: 'success',
            data: {
                industryData
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
};