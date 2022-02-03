const SimpleStorage = artifacts.require('SimpleStorage.sol');

contract('SimpleStorage', () => {
    it('Should update data', async () => {
        const storage = await SimpleStorage.new();
        await storage.updateData(11);
        const data = await storage.readData();
        assert(data.toString() === '11');
    });
});




// storage = await SimpleStorage.deployed()
// storage.address
// await storage.updateData(9)

// data = storage.readData()


// sql 
// con = connect
// con.update();
// con.inset()
// con.delete()