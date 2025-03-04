import React from "react";
import "./Statistics.css";
import CountUp from "react-countup";

const Statistics = () => {
  return (
   <section>
     <div className="statistics">
      <div class="wrapper-statistics">
        <div class="container-statistics block">
        <i class="bi bi-people-fill icon-stats"></i>
          <span class="num" data-val="400">
          <CountUp
              start={0}
              end={1150000}
              duration={10}
            />+
          </span>
          <span class="text">Total Users</span>
        </div>
        <div class="container-statistics block">
        <i class="bi bi-person-video3 icon-stats"></i>
          <span class="num" data-val="340">
          <CountUp
              start={0}
              end={90}
              duration={10}
            />+
          </span>
          <span class="text">Mentors</span>
        </div>
        <div class="container-statistics block">
        <i class="bi bi-book icon-stats"></i>
          <span class="num" data-val="225">
          <CountUp
              start={0}
              end={150000}
              duration={10}
            />+
          </span>
          <span class="text">Total Students</span>
        </div>
        <div class="container-statistics block">
        <i class="bi bi-star-fill icon-stats"></i>
          <span class="num" data-val="280">
            <CountUp
              start={0}
              end={36548}
              duration={10}
            />
          </span>
          <span class="text">Five Stars</span>
        </div>
      </div>
    </div>
   </section>
  );
};

export default Statistics;
