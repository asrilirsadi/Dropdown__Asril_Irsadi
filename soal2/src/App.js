import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component 
// {
//   render() 
//   {
//     return (
//              <div className="dropdown">
             
//                 <button className="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown">Pilih Jenjang
//                 <span className="caret"></span></button>
                
//                   <ul className="dropdown-menu">
//                     <li><a href="#">Pendidikan Pra Sekolah</a></li>
//                     <li><a href="#">Pendidikan Dasar</a></li>
//                     <li><a href="#">Pendidikan Menengah</a></li>
//                     <li><a href="#">Pendidikan Tinggi</a></li>
//                   </ul>
                
              
//               </div>
//             );
//   }
// }

// export default App;

class App extends Component 
{
  constructor()
  {
    super();
    this.state = {
                    namajenjang: 'Pilih Jenjang', 
                    namatingkatan: 'Pilih Tingkatan',
                    // tingkatan: 
                    // <ul class="dropdown-menu">
                    //   <li>
                    //     <a href="#" onClick={()=>{this.kliknamatingkatan('Pilih jenjangnya dulu!');}}>
                    //       Pilih jenjangnya dulu!
                    //     </a>
                    //   </li>
                    // </ul>,
                    namatingkatan1: 'Pendidikan Pra Sekolah',
                    namatingkatan2: 'Pendidikan Dasar',
                    namatingkatan3: 'Pendidikan Menengah',
                    namatingkatan4: 'Pendidikan Tinggi',
                    
                    // menu:'',
                    // menu2:'',
                    
                  }
  }

  // dropdownmenu(menu)
  // {
  //   this.setState({
  //                   menu:
  //                       <ul class="dropdown-menu">
  //                         <li><a href="#" onClick={()=>{this.klikprasekolah();}}>Pendidikan Pra Sekolah</a></li>
  //                         <li><a href="#" onClick={()=>{this.klikdasar();}}>Pendidikan Dasar</a></li>
  //                         <li><a href="#" onClick={()=>{this.klikmenengah();}}>Pendidikan Menengah</a></li>
  //                         <li><a href="#" onClick={()=>{this.kliktinggi();}}>Pendidikan Tinggi</a></li>
  //                       </ul>
  // }


  kliknamatingkatan(nama)
  {
    this.setState({
                    namatingkatan: nama,
                  })

  }

  klikprasekolah()
  {
    this.setState({
                    namajenjang: 'Pendidikan Pra Sekolah', 

                    namatingkatan1 : 'PAUD (Pendidikan Anak Usia Dini)',
                    namatingkatan2 : 'TK (Taman Kanak-kanak)',
                    namatingkatan3 : 'RA (Raudhatul Athfal)',
                    namatingkatan4 : ''
                    // tingkatan: 
                    // <ul class="dropdown-menu">
                    //   <li class="dropdown-header">Pendidikan Pra Sekolah</li>
                    //   <li><a href="#" onClick={()=>{this.kliknamatingkatan('PAUD (Pendidikan Anak Usia Dini)');}}>PAUD (Pendidikan Anak Usia Dini)</a></li>
                    //   <li><a href="#" onClick={()=>{this.kliknamatingkatan('TK (Taman Kanak-kanak)');}}>TK (Taman Kanak-kanak)</a></li>
                    //   <li><a href="#" onClick={()=>{this.kliknamatingkatan('RA (Raudhatul Athfal)');}}>RA (Raudhatul Athfal)</a></li>
                    // </ul>,
                  })
  }

  klikdasar()
  {
    this.setState({
                    namajenjang: 'Pendidikan Dasar', 
                    
                    namatingkatan1 : 'SD (Sekolah Dasar)',
                    namatingkatan2 : 'MI (Madrasah Ibtidaiyah)',
                    namatingkatan3 : 'SMP (Sekolah Menengah Pertama)',
                    namatingkatan4 : 'MTs (Madrasah Tsanawiyah)'
                    // tingkatan: 
                    // <ul class="dropdown-menu">
                    //   <li class="dropdown-header">Pendidikan Dasar</li>
                    //   <li><a href="#" onClick={()=>{this.kliknamatingkatan('SD (Sekolah Dasar)');}}>SD (Sekolah Dasar)</a></li>
                    //   <li><a href="#" onClick={()=>{this.kliknamatingkatan('MI (Madrasah Ibtidaiyah)');}}>MI (Madrasah Ibtidaiyah)</a></li>
                    //   <li><a href="#" onClick={()=>{this.kliknamatingkatan('SMP (Sekolah Menengah Pertama)');}}>SMP (Sekolah Menengah Pertama)</a></li>
                    //   <li><a href="#" onClick={()=>{this.kliknamatingkatan('MTs (Madrasah Tsanawiyah)');}}>MTs (Madrasah Tsanawiyah)</a></li>                      
                    // </ul>,
                  })
  }

  klikmenengah(){
    this.setState({
                    namajenjang: 'Pendidikan Menengah', 
                    
                    namatingkatan1 : 'SMA (Sekolah Menengah Atas)',
                    namatingkatan2 : 'MA (Madrasah Aliyah)',
                    namatingkatan3 : 'SMK (Sekolah Menengah Kejuruan)',
                    namatingkatan4 : ''
                    // tingkatan: 
                    // <ul class="dropdown-menu">
                    //   <li class="dropdown-header">Pendidikan Menengah</li>
                    //   <li><a href="#" onClick={()=>{this.kliknamatingkatan('SMA (Sekolah Menengah Atas)');}}>SMA (Sekolah Menengah Atas)</a></li>
                    //   <li><a href="#" onClick={()=>{this.kliknamatingkatan('MA (Madrasah Aliyah)');}}>MA (Madrasah Aliyah)</a></li>
                    //   <li><a href="#" onClick={()=>{this.kliknamatingkatan('SMK (Sekolah Menengah Kejuruan)');}}>SMK (Sekolah Menengah Kejuruan)</a></li>
                    // </ul>,
                  })
  }

  kliktinggi(){
    this.setState({
                    namajenjang: 'Pendidikan Tinggi', 
                    
                    namatingkatan1 : 'D3 Diploma',
                    namatingkatan2 : 'S1/D4 Sarjana',
                    namatingkatan3 : 'S2 Magister',
                    namatingkatan4 : 'S3 Doktoral'
                    // tingkatan: 
                    // <ul class="dropdown-menu">
                    //   <li class="dropdown-header">Pendidikan Tinggi</li>
                    //   <li><a href="#" onClick={()=>{this.kliknamatingkatan('D3 Diploma');}}>D3 Diploma</a></li>
                    //   <li><a href="#" onClick={()=>{this.kliknamatingkatan('S1/D4 Sarjana');}}>S1/D4 Sarjana</a></li>
                    //   <li><a href="#" onClick={()=>{this.kliknamatingkatan('S2 Magister');}}>S2 Magister</a></li>
                    //   <li><a href="#" onClick={()=>{this.kliknamatingkatan('S3 Doktoral');}}>S3 Doktoral</a></li>
                    // </ul>,
                  })
  }

  render() 
  {
    let judul = 
    {
      margin: '50px',
    };

    let row = 
    {
      width: '1000px',
    }
      
    let lebarmenu = 
    {
      width: '300px',
    }

    return (
            <div>
                {/* Judul */}
                         
                  <div id="judul" style={judul}>
                    <h1>Jenjang Pendidikan</h1>        
                  </div>
                
                <div className="row" style={row}>
                  <div className="col">
                      <div class="container" style={{padding: '50px'}}>
                        <div class="dropdown ">
                        <button class="btn btn-success dropdown-toggle" style={lebarmenu} data-toggle="dropdown">
                          {this.state.namajenjang}
                        </button>
                        {/* <ul class="dropdown-menu">
                              <li><a href="#" onClick={()=>{this.klikprasekolah();}}>Pendidikan Pra Sekolah</a></li>
                              <li><a href="#" onClick={()=>{this.klikdasar();}}>Pendidikan Dasar</a></li>
                              <li><a href="#" onClick={()=>{this.klikmenengah();}}>Pendidikan Menengah</a></li>
                              <li><a href="#" onClick={()=>{this.kliktinggi();}}>Pendidikan Tinggi</a></li>
                             </ul> */}
                          <ul class="dropdown-menu">
                            <li><a href="#" onClick={()=>{this.klikprasekolah();}}>{this.state.namatingkatan1}</a></li>
                            <li><a href="#" onClick={()=>{this.klikdasar();}}>{this.state.namatingkatan2}</a></li>
                            <li><a href="#" onClick={()=>{this.klikmenengah();}}>{this.state.namatingkatan3}</a></li>
                            <li><a href="#" onClick={()=>{this.kliktinggi();}}>{this.state.namatingkatan4}</a></li>
                        </ul>
                        </div>
                      </div>
                  </div>

                  {/* <div className="col">       
                      <div class="container" style={{padding: '50px'}}>
                        <div class="dropdown">
                        
                          <button class="btn btn-danger dropdown-toggle" style={lebarmenu} data-toggle="dropdown">
                            {this.state.namatingkatan}                      
                          </button>

                          {this.state.tingkatan}
                                              

                        </div>
                      </div>
                  </div> */}
                </div>
             

            </div>
          );
  }
}

export default App;
