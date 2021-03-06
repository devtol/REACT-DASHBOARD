import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from "@mui/icons-material"

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneycontainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward className="feafuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last months</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneycontainer">
                    <span className="featuredMoney">$4,415</span>
                    <span className="featuredMoneyRate">
                        -1.4 <ArrowDownward className="feafuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last months</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneycontainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">
                        +2.4 <ArrowUpward className="feafuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last months</span>
            </div>
        </div>
    )
}
