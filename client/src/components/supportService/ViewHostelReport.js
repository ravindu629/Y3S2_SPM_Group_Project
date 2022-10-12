import React from "react";
import "./SupportService.css";

export default function ViewMarksNavPage() {
    return (
        <div><br/><br/>
        <h2 className="hostelReport" >Hostel Details Graph</h2>
            <div style={{ marginLeft: 390, fontSize: 20 }}>
            <iframe title="myFrame001" width="900" height="490" src="https://charts.mongodb.com/charts-project-0-fthfb/embed/dashboards?id=1835aa0a-c268-4877-b299-130dc1692223&theme=dark&autoRefresh=true&maxDataAge=10&showTitleAndDesc=false&scalingWidth=scale&scalingHeight=scale"></iframe>
            </div>
        </div>

    );
}