import "./Result.scss"
import result1 from "../../assets/images/resultone.png"
import result2 from "../../assets/images/resulttwo.png"
import result3 from "../../assets/images/resultthree.png"
import result4 from "../../assets/images/resultfour.png"
import result5 from "../../assets/images/resultfive.png"
import result6 from "../../assets/images/resultsix.png"


function Result() {
    return (
        <div className="result-parent">
            <h2 className="result__h2">Sizning hamkorligingiz natijalari</h2>
            <div className="result">
                <img className="item-1" src={result1} alt="result" />
                <img className="item-2" src={result3} alt="result" />
                <img className="item-3" src={result4} alt="result" />
                <img className="item-4" src={result2} alt="result" />
                <img className="item-5" src={result5} alt="result" />
                <img className="item-6" src={result6} alt="result" />
            </div>
        </div>
    )
}

export default Result
