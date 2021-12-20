pragma solidity ^0.4.18;

/**
 * @title SafeMath
 * @dev Math operations ที่มาพร้อมกับ safety checks ซึ่งสามารถ throw error ได้
 */
library SafeMath {

  /**
  * @dev คูณเลข 2 จำนวนเข้าด้วยกัน จากนั้นก็ throw overflow
  */
  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    if (a == 0) {
      return 0;
    }
    uint256 c = a * b;
    assert(c / a == b);
    return c;
  }

  /**
  * @dev เป็นการหารเลข integer 2 จำนวน แบบไม่เอาผลหาร
  */
  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    // assert(b > 0); // Solidity จะ throw โดยอัตโนมัติหากเป็นกรณีที่หารด้วย 0
    uint256 c = a / b;
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return c;
  }

  /**
  * @dev ลบเลข 2 จำนวน จากนั้นก็ throw overflow (ตัวอย่าง กรณีตัวลบมากกว่าตัวหาร)
  */
  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  /**
  * @dev บวก 2 จำนวนเข้าด้วยกัน และ throw overflow
  */
  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
}
