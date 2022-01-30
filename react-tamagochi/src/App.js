import React, { useState } from "react";
import Characteristic from "./Characteristic";
import Interactive from "./Interactive";



function App() {
  const[thirst, setThirst]= useState (50) //жажда
  const [healtht, setHealtht]= useState (50) //здоровье
  const [hunger, setHunger] = useState (50) //голод
  const [fatigue, setFatigue] = useState (50) //усталость


  const drink  = ()=>{ //пить
    setThirst(thirst-10)
    setHealtht(healtht-1)
  }

 const eat = ()=>{ //кушать
  setHealtht(healtht-2)
  setHunger(hunger-10)
}

const play = ()=>{ //играть
  setThirst(thirst+30)
  setHunger(hunger+10)
  setFatigue(fatigue+10)
}

const relax = ()=>{ //отдыхать
  setHealtht(healtht+10)
  setFatigue(fatigue-10)


}
  
  return (
    <div className="App">
    <div className="infoBar"><Characteristic title = "здоровье:" progress={healtht} color='red'/>
    <Characteristic title = "жажда:" progress={thirst} color='blue'/>
    <Characteristic title = "голод:" progress={hunger} color='orange'/>
    <Characteristic title = "усталость:" progress={fatigue} color='green'/>
    </div>
    <div className="buttonBar">
    <Interactive title = "Есть" func={eat}/>
    <Interactive title = "Пить" func={drink}/>
    <Interactive title = "Отдохнуть" func={relax} />
    <Interactive title = "Работать" func={play}/>
    </div>

    </div>
  );
}

export default App;
