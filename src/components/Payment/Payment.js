import "./Payment.scss"
import minnatdormiz from "../../assets/images/minnaddormiz.png"

function Payment() {
    return (
        <div>
            <div className="img-box">
                <p className="thank">Saxovatingiz va <br /> insoniyligingizdan</p>
                <img className="thank-2" src={minnatdormiz} alt="minnatdormiz" />
            </div>
            <h3 className="money-sum">To'lov qilish usuli</h3>
            <div className="money">
                <a href="https://payme.uz/@hayriyauz" target="blank">
                    <button className="btn">Payme</button>
                </a>
                <a href="https://my.click.uz/clickp2p/457F2E721A739D9B94CCAAE2C1E66ABE6270EBC1AC7F8CE7B3E9DE8040D494F6" target="blank">
                    <button className="btn">Click</button>
                </a>
            </div>
            <div className="card">
                <div className="span">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                Card: 9860 0101 2919 2364
                </div>                   
            </div>

        </div>
    )
}

export default Payment
