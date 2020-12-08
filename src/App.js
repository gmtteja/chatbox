import logo from './logo.svg';
import './App.css';
import {radio_button_checked} from "material-icons"
function App() {
  var x=new Date();
  return (
  <div className="container-fluid">
    <hr/>
<div className="row">
<div className="col-sm-3" style={{borderRight:'3px solid black'}}  align="right">
in 1 mins <span style={{ position:'relative', left:'29px'}}> <i  className="material-icons">radio_button_checked</i></span>
</div>
 
<div className="col-sm-9" align="left">
 
  <h5>Name</h5>
  <h6>DesX</h6>
  <p  id="demo">Scheduled at {x.toUTCString()}</p> 
  <p>PM GMT +5:30</p>
  <button
  style={{backgroundColor:"inherit",
borderRadius:"5px",
border:'1px solid green',
margin:"4px",

}}
>Start</button>
  
  
  
  <button
  style={{backgroundColor:"inherit",
  borderRadius:"5px",
  border:'1px solid green',
  margin:"4px",
  }}>Copy Public url</button>
</div>
</div>




<div className="row">
<div className="col-sm-3" style={{borderRight:'3px solid black'}}  align="right">
in 1 mins 
<span style={{ position:'relative', left:'29px'}}><i  className="material-icons">radio_button_checked</i></span>
</div>
 
<div className="col-sm-9" align="left" >
  <h5>Gmm</h5>
  <h6>Jsnsns</h6>
  <p>Scheduled at  {x.toUTCString()}</p>
  <p>PM GMT+5:30</p>
  <button   style={{backgroundColor:"inherit",
  borderRadius:"5px",
  border:'1px solid green',
  margin:"4px",
  }}>Start</button><button   style={{backgroundColor:"inherit",
  borderRadius:"5px",
  border:'1px solid green',
  margin:"4px",
  }}>Copy Public url</button>
</div>
</div>
      </div>
  );
}

export default App;
