import React,{ Component } from 'react'
import './App.css';

class Form extends Component{
constructor(props){
	super(props)
	this.state = { ชื่อ:'',นามสกุล:'',เลขนักศึกษา:'', อายุ:null, }
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

// Form submitting logic, prevent default page refresh
handleSubmit(event){
	const { ชื่อ, นามสกุล,เลขนักศึกษา, อายุ,} = this.state
	event.preventDefault()
	alert(`
	____Your Details____\n
	ชื่อ : ${ชื่อ}
	นามสกุล: ${นามสกุล}
	เลขนักศึกษา : ${เลขนักศึกษา}
	อายุ : ${อายุ}
	`)
}


handleChange(event){
	this.setState({

	[event.target.name] : event.target.value
	})
}


render(){
	return(
	<form onSubmit={this.handleSubmit}>
		<div>
           <img src="https://media.discordapp.net/attachments/1015594727774629900/1018467875905871963/caption.gif" width="300" height="100"/>
        </div>
		<div><h1>ลงข้อมูล</h1>
		</div>	
		<div>
		<label htmlFor='ชื่อ'>ชื่อ</label>
		<input
			name='ชื่อ'
			placeholder='ชื่อ'
			value = {this.state.ชื่อ}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='นามสกุล'>นามสกุล</label>
		<input
			name='นามสกุล'
			placeholder='นามสกุล'
			value = {this.state.นามสกุล}
			onChange={this.handleChange}
		/>
		</div>
	
		<div>
		<label htmlFor='เลขนักศึกษา'>เลขนักศึกษา</label>
		<input
			name='เลขนักศึกษา'
			placeholder='เลขนักศึกษา'
			value={this.state.เลขนักศึกษา}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='อายุ'>อายุ</label>
		<input
			name='อายุ'
			placeholder='อายุ'
			value={this.state.อายุ}
			onChange={this.handleChange}
		/>
		</div>
		<div><label>เพศ</label><select>
  <option value="ชาย">ชาย</option>
  <option value="หญิง">หญิง</option>
  <option selected value="เพศที่3">เพศที่3</option>
</select>
</div>
		<div>
		<label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday"></input>
		</div>

	
  <div>
          <button>กดส่ง</button>
        </div>
		
  
  </form>
	)
}
}

export default Form
