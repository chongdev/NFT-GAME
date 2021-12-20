var abi = ""; /* abi จะถูกสร้างโดยคอมไพล์เลอร์ */
var ZombieFactoryContract = web3.eth.contract(abi)
var contractAddress = ""; /*ส่วนนี้คือที่อยู่ contract ของเราบน Ethereum หลังจากได้นำมาใช้ */
var ZombieFactory = ZombieFactoryContract.at(contractAddress)

// ต่อไปนี้จะเป็น event listener บางตัวที่จะรับค่า input ชนิดข้อความ:
$("#ourButton").click(function(e) {
  var name = $("#nameInput").val()
  // เรียกฟังก์ชัน `createRandomZombie` ในcontract ของเรา:
  ZombieFactory.createRandomZombie(name)
})

// รับฟังเหตุการณ์ `NewZombie` event, and update the UI `NewZombie` พร้อมทั้งทำการอัพเดท User Interface หรือการแสดงผลในส่วนของผู้ใช้
var event = ZombieFactory.NewZombie(function(error, result) {
  if (error) return
  generateZombie(result.zombieId, result.name, result.dna)
})

// รับค่า DNA ของซอมบี้และทำการอัพเดทรูปภาพ
function generateZombie(id, name, dna) {
  let dnaStr = String(dna)
  // เว้นระยะห่างด้านหน้าของ DNA ด้วยเลข 0 หากจำนวน DNA นั้นมีความยาวน้อยกว่า 16ตัว
  while (dnaStr.length < 16)
    dnaStr = "0" + dnaStr

  let zombieDetails = {
    //DNA สองตัวแรกจะบ่งบอกลักษณะของหัว และเราสามารถเลือกได้ 7 แบบดังนั้น จะทำการ % ด้วย 7 
    // เพื่อที่จะได้จำนวน 0 – 6 จากนั้น+ด้วย1เพื่อให้ได้เป็นจำนวน 1 – 7 ทำให้เรามี7ตัวเลือก
    // ไฟล์รูปภาพชื่อว่า"head1.png" ไปจนถึง "head7.png" 
    // this number:
    headChoice: dnaStr.substring(0, 2) % 7 + 1,
    // 2ตัวถัดไปจะใช้เพื่อการเลือกรูปแบบของตา ถึงเราจะเลือกได้11รูปแบบ:
    eyeChoice: dnaStr.substring(2, 4) % 11 + 1,
    // เลือกเสื้อได้6แบบ:
    shirtChoice: dnaStr.substring(4, 6) % 6 + 1,
    // ข้อมูล6ตัวสุดท้ายจะเอาไว้ใช้เลือกสี โดยเราจะทำการอัพเดทโดยใช้ CSS filter: hue-rotate
    // ซึ่งมี 360องศา:
    skinColorChoice: parseInt(dnaStr.substring(6, 8) / 100 * 360),
    eyeColorChoice: parseInt(dnaStr.substring(8, 10) / 100 * 360),
    clothesColorChoice: parseInt(dnaStr.substring(10, 12) / 100 * 360),
    zombieName: name,
    zombieDescription: "A Level 1 CryptoZombie",
  }
  return zombieDetails
}