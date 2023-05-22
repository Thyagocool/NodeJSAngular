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

    async createData(data) {
        try {
            const resultSet = await this.__modelName.create(data);
            return resultSet;
        } catch (error) {
            return {message: error.message};
        }    
    };

    async deleteData(id) {
        try {
            await this.__modelName.destroy({where: { id:id }});
            return {message: "Data was deleted"};
        } catch (error) {
            return {message: error.message};
        }
    };

    async updateData(id, data){
        try{
            const resultSet =  await this.__modelName.update(data, {where: { id:id }});
            return {message: 'Data as updated'};
        }catch(error){
            return {message: error.message};
        };
    };
}

module.exports = Repository;