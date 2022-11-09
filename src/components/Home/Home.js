import "./Home.scss"
import kuch from "../../assets/images/kuch.png"
import picture1 from "../../assets/images/picture1.png"
import picture2 from "../../assets/images/picture2.png"
import Result from "../Result/Result"
import { useEffect, useState } from "react"
import axios from "axios";

function Home() {
    const [limit, setLimit] = useState("8")
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkRpeW9yYmVrIiwiX2lkIjoiNjM2NTI0MTA3NjU1YWY4ZDBiNDU3M2YwIiwicm9sZSI6IkFkbWluIiwiaWF0IjoxNjY3NjM2NzM5fQ.l9XITZ61bLdq0sBelp8hLB-oOd21X8WqgNYMwL_tF8Q"
    useEffect(() => {
        const getPosts = async () => {
            const config = {
                headers: {
                    "Content-type": "application/json",
                    'Authorization': "Bearer " + token,
                },
            };
            setLoading(true)
            const res = await axios.get(`https://hayriyauz.vercel.app/api/post/?limit=${limit}&_id=636524107655af8d0b4573f0`, config)
            setData(res.data)
            setLoading(false)
        }
        getPosts()
    }, [limit])
    return (
        <div >
            <div className="img-box-2">
                <p className="thank-3">Insonlar  <br /> ishonchidan</p>
                <img className="thank-2 thank-2-1" src={kuch} alt="kuch olamiz" />
            </div>
            <section className="about">
                <div className="group-one">
                    <img className="about__img-1" src={picture1} alt="picture2" />
                    <img className="about__img-2" src={picture2} alt="picture1" />
                </div>
                <div className="group-two">
                    <h5 className="about__h5">Faoliyatimiz haqida</h5>
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
            <section className="result">
                {loading ? <h3>Loading...</h3> : <Result data={data} />}
                <div className="w-100forauto">
                    <button onClick={e => setLimit(limit + 8)} className="result-btn">
                        <span>ko'proq yuklash</span>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Home
