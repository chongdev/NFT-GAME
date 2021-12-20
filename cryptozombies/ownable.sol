/**
 * @title Ownable
 * @dev Ownable contract มี address ของ owner และได้เตรียมฟังก์ชั่นเกี่ยวกับการควบคุมขั้นพื้นฐานในเรื่องของ authorization ไว้ให้แล้ว
 * โดยส่วนนี้จะหมายถึงของการให้ "user permissions" หรือการให้สิทธิ์ในการเข้าถึงแก้ผู้ใช้นั่นเอง
 */
contract Ownable {
  address public owner;

  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

  /**
   * @dev Ownable constructor ตั้งค่าบัญชีของ sender ให้เป็น `owner` ดั้งเดิมของ contract 
   *
   */
  function Ownable() public {
    owner = msg.sender;
  }


  /**
   * @dev จะ throw ออกมาเมื่อถูกเรียกโดยบัญชีใดๆ ก็ตามมากกว่าจากตัว  owner เอง
   */
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }


  /**
   * @dev อนุญาตให้ owner คนปัจจุบันสามารถยกการควบคุมดูแล contract ให้แก่ newOwner ได้ 
   * @param newOwner คือ address ที่จะได้รับ ownership ไปนั่นเอง
   */
  function transferOwnership(address newOwner) public onlyOwner {
    require(newOwner != address(0));
    OwnershipTransferred(owner, newOwner);
    owner = newOwner;
  }

}
