class Repository {
    constructor(modelName){
        this.__modelName = modelName;
    };

    async selectAll(search){
        try {
            const where = {...search};
            const result = await this.__modelName.findAll({where});
            return result;
        } catch (error) {
            return {message: error.message};
            
        }

    }
}

module.exports = Repository;