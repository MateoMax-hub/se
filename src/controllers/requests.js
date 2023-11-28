import Request from './../models/Request.js'

export const getRequestsLists = async (req, res) => {
    try {
        const requests = await Request.find()
        res.status(200).json({
            listas: requests
        });
    } catch (error) {
        res.status(error.code || 500).json({ message: error.message });
    }
}

export const postNewReq = async (req, res) => {
    try {
        const newReq = new Request({
            name: req.body.name
        })
        await newReq.save()
        res.status(200).json({
            message: "lista creada",
        });
    } catch (error) {
        res.status(error.code || 500).json({ message: error.message });
    }
}

export const patchCount = async (req, res) => {
    try {
        const { reqId } = req.params;
        await Request.findOneAndUpdate({_id: reqId}, {count: req.body.count})
        res.status(200).json({
            message: "conteo actualizado",
        });
    } catch (error) {
        res.status(error.code || 500).json({ message: error.message });
    }
}
