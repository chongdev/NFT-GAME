const SimpleStorage = artifacts.require('SimpleStorage.sol');

contract('SimpleStorage', () => {
    it('Should update data', async () => {
        const storage = await SimpleStorage.new();
        await storage.updateData(11);
        const data = await storage.readData();
        assert(data.toString() === '11');
    });
});


// data = await SimpleStorage.deployed()
// data.address

// storage = await SimpleStorage.deployed()
// storage.address
// await storage.updateData(10)