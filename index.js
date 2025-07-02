
function Shape()
{
 let result=document.getElementById('result')
 result.innerHTML='' 
let choosen_shape=document.getElementById('shape').value 
console.log(choosen_shape)
var msg_div=document.getElementById('in')
if(choosen_shape=='')
{
    msg_div.innerHTML=''
}
else if(choosen_shape=='Square')
{
    var htmlpart = `
  <input type='text' id='side' placeholder='Enter Side of Square'/>
  <label for="Shapes">Choose Calculation</label>
  <select name="Calculation" id="cal">
    <option value="">Select</option>
    <option value="Area">Area</option>
    <option value="Perimeter">Perimeter</option>
  </select> 
   <button type='submit' onclick='{Square_Calculation()}'>Calculate</button>
`;

msg_div.innerHTML=htmlpart
}
else if(choosen_shape=='Rectangle')
{
    var htmlpart = `
  <input type='text' id='length' placeholder='Enter length of Rectangle' />
   <input type='text' id='breadth'  placeholder='Enter breadth of Rectangle' />
   <label for="Shapes">Choose Calculation</label>
  <select name="Calculation" id="cal" >
    <option value="">Select</option>
    <option value="Area">Area</option>
    <option value="Perimeter">Perimeter</option>
  </select> 
  <button type='submit' onclick="{Rectangle()}">Calculate</button>
`;
msg_div.innerHTML=htmlpart
}
else if(choosen_shape=='Triangle')
{
  var htmlPart=`
  <input type='text' id='a' placeholder='Enter first side of triangle' />
  <input type='text' id='b' placeholder='Enter second side of triangle' />
  <input type='text' id='c' placeholder='Enter third side of triangle' />
  <label for="Shapes">Choose Calculation</label>
  <select name="Calculation" id="cal" >
    <option value="">Select</option>
    <option value="Area">Area</option>
    <option value="Perimeter">Perimeter</option>
  </select> 
  <button type='submit' onclick="{Triangle()}">Calculate</button>
  `
  msg_div.innerHTML=htmlPart
}
else if(choosen_shape=='Cube')
{
  var htmlpart=`
  <input type='text' id='a' placeholder='Enter side of cube' />
  <label for="Shapes">Choose Calculation</label>
  <select name="Calculation" id="cal" >
    <option value="">Select</option>
    <option value="CSA">CSA</option>
    <option value="TSA">TSA</option>
    <option value="Volume">Volume</option>
  </select> 
  <button type='submit' onclick="{Cube()}">Calculate</button>
  `
  msg_div.innerHTML=htmlpart
}
else if(choosen_shape=='Cuboid')
{
  var htmlpart=`
  <input type='text' id='l' placeholder='Enter length of cuboid' />
  <input type='text' id='b' placeholder='Enter breadth of cuboid' />
  <input type='text' id='h' placeholder='Enter height of cuboid' />
  <label for="Shapes">Choose Calculation</label>
  <select name="Calculation" id="cal" >
    <option value="">Select</option>
    <option value="CSA">CSA</option>
    <option value="TSA">TSA</option>
    <option value="Volume">Volume</option>
  </select> 
  <button type='submit' onclick="{Cuboid()}">Calculate</button>
  `
  msg_div.innerHTML=htmlpart
}
else if(choosen_shape=='Cylinder')
{
  var htmlpart=`
  <input type='text' id='r' placeholder='Enter radius of cylinder' />
  <input type='text' id='h' placeholder='Enter height of cylinder' />
  <label for="Shapes">Choose Calculation</label>
  <select name="Calculation" id="cal" >
    <option value="">Select</option>
    <option value="CSA">CSA</option>
    <option value="TSA">TSA</option>
    <option value="Volume">Volume</option>
  </select> 
  <button type='submit' onclick="{Cylinder()}">Calculate</button>
  `
  msg_div.innerHTML=htmlpart
}
else if(choosen_shape=='Sphere')
{
  var htmlpart=`
  <input type='text' id='r' placeholder='Enter radius of Sphere' />
  <label for="Shapes">Choose Calculation</label>
  <select name="Calculation" id="cal" >
    <option value="">Select</option>
    <option value="surface_area">Surface Area</option>
    <option value="Volume">Volume</option>
  </select> 
  <button type='submit' onclick="{Sphere()}">Calculate</button>
  `
  msg_div.innerHTML=htmlpart
}
else if(choosen_shape=='Trapezium')
{
  var htmlpart=`
  <input type='text' id='p1' placeholder='Enter first parallel side' />
  <input type='text' id='p2' placeholder='Enter second parallel side' />
  <input type='text' id='h' placeholder='Enter height' />
  <input type='text' id='a' placeholder='Enter first non-parallel side' />
  <input type='text' id='b' placeholder='Enter second non-parallel side' />
  <select name="Calculation" id="cal">
    <option value="">Select</option>
    <option value="area">Area</option>
    <option value="Perimeter">Perimeter</option>
  </select> 
  <button type='submit' onclick="{Trapezium()}">Calculate</button>
  `
  msg_div.innerHTML=htmlpart
  
}
}
function Trapezium()
  {
    console.log("Function Call")
    let choosen_cal=document.getElementById('cal').value
    let result=document.getElementById('result')
    if(choosen_cal=='area'){
      let p1=parseInt(document.getElementById('p1').value)
      let p2=parseInt(document.getElementById('p2').value)
      let h=parseInt(document.getElementById('h').value)
      let area=(1/2)*(p1+p2)*h
      let htmlPart=`
      <span>Area = ${area}</span>
      `
      result.innerHTML=htmlPart 
    }
    else if(choosen_cal=='Perimeter')
    {
      let p1=parseInt(document.getElementById('p1').value)
      let p2=parseInt(document.getElementById('p2').value)
      let a=parseInt(document.getElementById('a').value)
      let b=parseInt(document.getElementById('b').value)
      let Perimeter=p1+p2+a+b
      let htmlPart=`
      <span>Perimeter = ${Perimeter}</span>
      `
      result.innerHTML=htmlPart
    }
  }
// Function for Sphere Shape
function Sphere(){
  let r=parseInt(document.getElementById('r').value)
  let choosen_cal=document.getElementById('cal').value
  let result=document.getElementById('result')
  if(choosen_cal=='surface_area'){
    let Surface_area=4*3.14*r*r
    let res_html=`
    <span class='result_style'>Curved Surface Area = </span>
    <span>${Surface_area.toFixed(2)}</span>
    `
    result.innerHTML=res_html
  }
else if(choosen_cal=='Volume'){
  let vol=(4/3)*3.14*r*r*r  
  let res_html=`
  <span class='result_style'>Volume = </span>
  <span>${vol.toFixed(2)}</span>
  `
  result.innerHTML=res_html
}
}
// Function for Cylinder Shape
function Cylinder(){
  let r=parseInt(document.getElementById('r').value)
  let h=parseInt(document.getElementById('h').value)
  let choosen_cal=document.getElementById('cal').value
  let result=document.getElementById('result')
  if(choosen_cal=='CSA'){
    let csa=2*3.14*r*h
    let res_html=`
    <span class='result_style'>Curved Surface Area = </span>
    <span>${csa.toFixed(2)}</span>
    `
    result.innerHTML=res_html
  }
else if(choosen_cal=='TSA'){
  let tsa=2*3.14*r*(r+h)
  let res_html=`
  <span class='result_style'>Total Surface Area = </span>
  <span>${tsa.toFixed(2)}</span>
  `
  result.innerHTML=res_html
}
else if(choosen_cal=='Volume'){
  let vol=3.14*r*r*h
  let res_html=`
  <span class='result_style'>Volume</span>
  <span>${vol.toFixed(2)}</span>
  `
  result.innerHTML=res_html
}
}
// Function for Cuboid calculation
function Cuboid(){
  let l=parseInt(document.getElementById('l').value)
  let b=parseInt(document.getElementById('b').value)
  let h=parseInt(document.getElementById('h').value)
  let choosen_cal=document.getElementById('cal').value
  let result=document.getElementById('result')
  if(choosen_cal=='CSA'){
    let csa=2*(l+b)*h
    let res_html=`<span class='result_style'>Curved Surface Area= </span>
    <span>${csa.toFixed(2)}</span>
    `
    result.innerHTML=res_html
  }
else if(choosen_cal=='TSA'){
  let tsa=2*((l*b)+(b*h)+(h*l))
  let res_html=`<span class='result_style'>Total Surface Area = </span>
  <span>${tsa.toFixed(2)}</span>
   `
  result.innerHTML=res_html
}
else if(choosen_cal=='Volume'){
  let vol=l*b*h
  let res_html=`<span class='result_style'>Volume = </span>
  <span>${vol.toFixed(2)}</span>
   `
  result.innerHTML=res_html
}
}
// Function for Cube calculation
function Cube(){
  let a=parseInt(document.getElementById('a').value)
  let choosen_cal=document.getElementById('cal').value
  let result=document.getElementById('result')
  if(choosen_cal=='CSA'){
    let csa=4*a*a
    let res_html=`<span class='result_style'>Curved Surface Area = </span>
    <span>${csa.toFixed(2)}</span>
    `
    result.innerHTML=res_html
  }
else if(choosen_cal=='TSA'){
  let tsa=6*a*a
  let res_html=`<span class='result_style'>Total Surface Area = </span>
  <span>${tsa.toFixed(2)}</span>
   `
  result.innerHTML=res_html
}
else if(choosen_cal=='Volume'){
  let vol=a*a*a
  let res_html=`<span class='result_style'>Volume = </span>
  <span>${vol.toFixed(2)}</span>
   `
  result.innerHTML=res_html
}
}
// Function for Triangle Calculation
function Triangle()
{
  let a=parseInt(document.getElementById('a').value)
  let b=parseInt(document.getElementById('b').value)
  let c=parseInt(document.getElementById('c').value)
  let choosen_cal=document.getElementById('cal').value
  let result=document.getElementById('result')
  if((a+b)>c && (b+c)>a && (c+a)>b)
  {
   if(choosen_cal=='Area')
  {
    let s=(a+b+c)/2
    let ar=Math.sqrt(s*(s-a)*(s-b)*(s-c))
    
    result.innerHTML=res_html
  }
  else if(choosen_cal=='Perimeter')
  {
    let res_html=`<span class='result_style'>Perimeter = </span>
    <span>${a+b+c}</span>
    `
    result.innerHTML=res_html
  }let res_html=`<span class='result_style'>Area = </span>
    <span>${ar.toFixed(2)}</span>
    `
  }else{
    result.innerHTML=`Triangle is not possible for these sides please input valid sides of triangle`
  }
}
// Function For Square Shape Calculation
function Square_Calculation()
{
let choosen_cal=document.getElementById('cal').value
console.log(choosen_cal)
let side=document.getElementById('side').value
console.log(side)
let temp=parseInt(side)
let result=document.getElementById('result')
if(choosen_cal=='Area')
{
    
    console.log(temp*temp)
    let res_html=`<span class='result_style'>Area = </span>
    <span>${(temp*temp).toFixed(2)}</span>
    `
    result.innerHTML=res_html
}
else if(choosen_cal=='Perimeter')
{
    console.log(4*temp)
    let res_html=`<span class='result_style'>Perimeter = </span>
    <span>${(4*temp).toFixed(2)}</span>
    `
    result.innerHTML=res_html
}
}

// Function For Rectangle Shape Calculation
function Rectangle()
{
  let l=parseInt(document.getElementById('length').value)
  let b=parseInt(document.getElementById('breadth').value)
  console.log(l+b)
  let choosen_choice=document.getElementById('cal').value
  if(choosen_choice=='Area')
  {
    let res_html=`<span class='result_style'>Area = </span>
    <span>${(l*b).toFixed(2)}</span>
    `
    result.innerHTML=res_html
  }
  else if(choosen_choice=='Perimeter')
  {
    let res_html=`<span class='result_style'>Perimeter = </span>
    <span>${(2*(l+b)).toFixed(2)}</span>
    `
    result.innerHTML=res_html
  }
}