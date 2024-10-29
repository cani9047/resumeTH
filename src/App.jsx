import React from "react";
import profile from "./assets/profile.jpg"; // Make sure your profile image is saved here as profile.jpg
import "./App.css";

function App() {
  return (
    <div className="resume-wrapper">
      <div className="resume">
        <aside className="sidebar">
          <img src={profile} alt="Profile" className="profile-pic" />
          <section className="about">
            <h2>ข้อมูลส่วนตัว</h2>
            <p><strong>นาย คูณสวรรค์ สีหาวงค์</strong></p>
            <ul>
              <li>ชื่อเล่น: เสือ</li>
              <li>วันเกิด: 31 พ.ค. 2546</li>
              <li>เพศ: ชาย</li>
              <li>สัญชาติ: ลาว</li>
            </ul>
          </section>
          <section className="education">
            <h2>การศึกษา</h2>
            <p>มหาวิทยาลัยกรุงเทพ</p>
            <p>คณะเทคโนโลยีสารสนเทศและนวัตกรรม สาขาวิทยาการคอมพิวเตอร์</p>
            <p>2564 - ปัจจุบัน</p>
            <p>เกรดเฉลี่ยรวม: 3.28</p>
          </section>
          <section className="languages">
            <h2>ภาษา</h2>
            <ul>
              <li>ภาษา ไทย</li>
              <li>ภาษา ลาว</li>
              <li>ภาษา อังกฤษ</li>
            </ul>
          </section>
          <section className="contact">
            <h2>ติดต่อ</h2>
            <p>โทรศัพท์: 097-970-2537</p>
            <p>อีเมล: khounsavanh.siha@bumail.net</p>
            <p>ที่อยู่: 4/176 Kave condo คลองหนึ่ง, คลองหลวง, ปทุมธานี 12120</p>
          </section>
        </aside>
        <main className="content">
          <header>
            <h1>คูณสวรรค์ สีหาวงค์</h1>
            <h2>Full Stack, Frontend</h2>
            <p>สวัสดีครับ ผมเป็นนักศึกษาชั้นปีที่ 4 สาขาวิทยาการคอมพิวเตอร์ของคณะเทคโนโลยีสารสนเทศและนวัตกรรม มหาวิทยาลัยกรุงเทพ และผมชอบการเรียนรู้สิ่งใหม่ๆ ในการเขียนโค้ด</p>
          </header>
          <section className="projects">
            <h2>โครงการ</h2>
            <div className="project">
              <h3>โปรเจค - Company Inventory Management (CIM) 2565</h3>
              <p><strong>Python</strong></p>
              <p>CIM ถูกพัฒนาด้วยภาษา Python มันเป็นโปรแกรมจัดการต้นทุน วัตถุดิบ กำไร และขาดทุน ของธุรกิจต่างๆ โปรแกรมจะทำการคำนวนเพื่อให้ง่ายต่อการจัดการ</p>
            </div>
            <div className="project">
              <h3>โปรเจค - Bu Wallet และ Wiriya House 2566</h3>
              <p><strong>Java OOP</strong></p>
              <p>Bu Wallet เป็นโปรแกรม Java ที่จำลองกระเป๋าเงินออนไลน์สำหรับนักศึกษามหาวิทยาลัยกรุงเทพ ใช้ในการโอนเงิน ฝาก ถอน และบันทึกประวัติการทำธุรกรรมภายในมหาวิทยาลัย</p>
              <p><strong>Python</strong></p>
              <p>wiriya house เป็นโปรแกรมที่ช่วยในการจัดการผู้เช่าหอพักของ wiriya เพื่ออำนวยการจัดการของผู้เป็นเจ้าของ</p>
            </div>
            <div className="project">
              <h3>โปรเจค - CheckList APP 2567</h3>
              <p><strong>.NET MAUI</strong></p>
              <p>CheckList APP เป็นโปรแกรมที่ช่วยในการวางแผนในแต่ละวันของผู้ใช้ ซึ่งทำให้ผู้ใช้มีการวางแผนในการทำงานหรือทำกิจกรรมภายในวันได้อย่างไม่มีกิจลืม</p>
            </div>
          </section>
          <section className="skills">
            <div className="skills-column">
              <h2>ทักษะ และ เครื่องมือที่ใช้</h2>
              <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>ทดสอบภาษาอังกฤษได้ ระดับ B1 SALLC-EPT</li>
              </ul>
            </div>
            <div className="skills-column">
              <h2>ทักษะเสริม</h2>
              <ul>
                <li>Figma</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Premiere Pro</li>
                <li>FL Studio</li>
                <li>Canva</li>
                <li>Microsoft Office</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;