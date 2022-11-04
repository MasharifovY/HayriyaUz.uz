import "./Home.scss"
import kuch from "../../assets/images/kuch.png"

function Home() {
    return (
        <div>
            <div className="img-box-2">
                <p className="thank-3">Insonlar  <br /> ishonchidan</p>
                <img className="thank-2" src={kuch} alt="minnatdormiz" />
            </div>
            <section className="about">
                <div className="group-one">

                </div>
                <div className="group-two">
                    <h5>Faoliyatimiz haqida</h5>
                    <p className="about__first-p">Sahovatli insonlar yordami bilan, muhtojlarga ko'mak beramiz</p>
                    <p className="about__second-p">Yordamga yoki ko'makka muhtoj insonlar uchun sahovat
                    aksiyalari o'tkaziladi. Bu orqali ko'plab insonlarning og'iri
                    yengil bo'ladi. Shunday insonlar borki boshqalar uchun doimiy
                    yordamini ayamaydi va o'z shaxsini sir saqlashni istaydi. Biz ham
                    shunday insonlardan bo'lishni hoxladik va insonlarga qo'limizdan
                    kelgancha ko'mak bermoqchimiz. Sizchi bizning safimizga
                    qo'shilishga va insoniylik tamoyillarini yanada mustahkamlashga
                    tayyormisiz?</p>
                </div>
            </section>
        </div>
    )
}

export default Home
