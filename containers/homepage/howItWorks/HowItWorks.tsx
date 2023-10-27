import {
	faChartLine,
	faChartSimple,
	faGift,
	faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function HowItWorks() {
	return (
		<section className="hi-section fl-cl fl-c sc-padding" id="how-it-works">
			<div className="hi-title fl-cl fl-c">
				<h3 className="hi-section-title">{"HOW IT WORKS"}</h3>
				<p className="hi-section-subtitle">{"Unlock Your Growth Potential"}</p>
			</div>

			<div className="hi-infobox-container fl-bc fl-sa">
				<div className="hi-infobox fl-cl fl-c">
					<FontAwesomeIcon icon={faChartSimple} className="hi-infobox-icon" />
					<div className="hi-infobox-details fl-cl fl-c">
						<h5 className="hi-info-title">{"Onboard!"}</h5>
						<p className="hi-info">{`Signup and get onboarded as an SME or supply chain stakeholder.`}</p>
						<Link href="/signUp">
							<button className="hi-info-cta">{"Signup"}</button>
						</Link>
					</div>
				</div>

				<div className="hi-infobox fl-cl fl-c">
					
					<FontAwesomeIcon icon={faGift} className="hi-infobox-icon" />
					<div className="hi-infobox-details fl-cl fl-c">
						<h5 className="hi-info-title">{"Connect and Do Business!"}</h5>
						<p className="hi-info">{`Find suppliers and other supply chain stakeholder, initiate transparent interactions and confirm business.`}</p>
						<Link href="/signUp">
							<button className="hi-info-cta">{"Connect!"}</button>
						</Link>
					</div>
				</div>

				<div className="hi-infobox fl-cl fl-c">
				<FontAwesomeIcon
						icon={faHandHoldingDollar}
						className="hi-infobox-icon"
					/>
					<div className="hi-infobox-details fl-cl fl-c">
						<h5 className="hi-info-title">{"Get Financed!"}</h5>
						<p className="hi-info">{`Apply for financing from our lending partners and get the funds transfered directly to your supply chain representative.`}</p>
						<Link href="/signUp">
							<button className="hi-info-cta">{"Apply for Financing"}</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
