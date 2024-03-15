import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import MyCart from "../MyCart/MyCart";

const Main = () => {
  const [api, setApi] = useState([]);
  const [time, setTime] = useState(0);
  const [course,setCourse] = useState([])
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/samiulalimsaad/ph-course-registration/main/public/courses.json"
    )
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);


  function hour(credit,d) {
    console.log("d is",d)
    let newCourse = [...course,d]
    setCourse(newCourse)
    let newTime = time + credit;
    setTime(newTime)
  }


  






  return (
    <div className="flex justify-between mt-11">
      <div className="left grid grid-cols-3 gap-5">
        {api.map((element, i) => (
          <Card key={i} hour={hour}  api={element}></Card>
        ))}
      </div>
      <div className="right p-5">
        <MyCart time={time} course={course}></MyCart>
      </div>
    </div>
  );
};

export default Main;
