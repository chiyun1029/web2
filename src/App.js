import React from 'react'
import './App.css'
import logo from "./books.png";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRoutes,
} from 'react-router-dom'



const Home = () => {



    return (
      <div>
       
          <nav class="navbar">
            <font class="box1"> 
              <font class="item6">
              <img src={logo} className="App-logo" alt="logo" />
              學  習  寶
              </font>
                
              <font class="item3">
              
                職 業 指 南 寶 典
              </font>
            </font>
        </nav>
        
        <br/>
        
        
        
        <div class="box">
        <div class="item1">


                  <div class="grid-item3">
                    <Link to='/future'class='item4-1'>未來職涯知識庫</Link>
                  </div>
              <br/>
                  <div class="grid-item3">

                    <Link to='/school' class='item4-1'>各校院圖譜</Link>
                  </div>
              <br/>
                  <div class="grid-item3">
                    <Link to='/personal'class='item4-1'>個人化學習歷程</Link>
                  </div>
              <br/>
          </div>
          <div class="item2">
                        
          </div>
        </div>
      </div>
    )
}


const Future = () => {
    
    return (

        <div>
          <div>
          <nav class="navbar">
            <font class="box1"> 
              <font class="item6">
              <img src={logo} className="App-logo" alt="logo" />
              學  習  寶
              </font>
                
              <font class="item3">
              
                職 業 指 南 寶 典
              </font>
            </font>
        </nav>
        
        <br/>

        <div class="box">
          <div class="item1">
                <div class="grid-item4">
                    <Link to='/future'class='item4-1'>未來職涯知識庫</Link>
                  </div>
              <br/>
                  <div class="grid-item3">

                    <Link to='/school' class='item4-1'>各校院圖譜</Link>
                  </div>
              <br/>
                  <div class="grid-item3">
                    <Link to='/personal'class='item4-1'>個人化學習歷程</Link>
                  </div>
          </div>
          <div class="item2">
                  熱門職業
                  <br/>
                    <select class="butt">
                    <option value="grapefruit">資安工程師</option>
                      <option value="lime">DevOps工程師</option>
                      <option selected value="coconut">MIS工程師</option>
                      <option value="mango">軟體設計工程師</option>
                      <option >網站程式設計師</option>
                      <option >資料庫管理工程師</option>
                      <option >系統維護/操作員</option>
                      <option >軟體專案主管</option>
                      <option >Internet程式設計師</option>
                      <option >電腦系統分析師</option>
                    </select><br/>
                  所有職業
                  <br/>
                    <select class="butt">
                    <option value="grapefruit">資安工程師</option>
                      <option value="lime">DevOps工程師</option>
                      <option selected value="coconut">MIS工程師</option>
                      <option value="mango">軟體設計工程師</option>
                      <option >網站程式設計師</option>
                      <option >資料庫管理工程師</option>
                      <option >系統維護/操作員</option>
                      <option >軟體專案主管</option>
                      <option >Internet程式設計師</option>
                      <option >電腦系統分析師</option>
                      <option >資料分析師</option>
                      <option >網路管理工程師</option>
                      <option >資訊安全分析師</option>
                      <option >系統分析師</option>
                      <option >專案管理師</option>
                      <option >風險顧問師</option>
                      <option >行銷規劃師</option>
                    </select><br/>
            
          </div>
        </div>
      </div>
            

        </div>
    )
}

const School = () => {
  
  return (

      <div>
        <div>
        <nav class="navbar">
            <font class="box1"> 
              <font class="item6">
              <img src={logo} className="App-logo" alt="logo" />
              學  習  寶
              </font>
                
              <font class="item3">
              
                職 業 指 南 寶 典
              </font>
            </font>
        </nav>
      <br/>
      <div class="box">
        <div class="item1">
                  <div class="grid-item3">
                    <Link to='/future'class='item4-1'>未來職涯知識庫</Link>
                  </div>
              <br/>
                  <div class="grid-item4">

                    <Link to='/school' class='item4-1'>各校院圖譜</Link>
                  </div>
              <br/>
                  <div class="grid-item3">
                    <Link to='/personal'class='item4-1'>個人化學習歷程</Link>
                  </div>
        </div>
        <div class="item2">
        選擇學校
                    <br/>
                    <select class="butt">
                      <option value="grapefruit">Grapefruit</option>
                      <option value="lime">Lime</option>
                      <option selected value="coconut">Coconut</option>
                      <option value="mango">Mango</option>
                    </select><br/>
          
        </div>
      </div>
    </div>
          

      </div>
  )
}


const Personal  = () => {
  
  
  return (

      <div>
        <div>
        <nav class="navbar">
            <font class="box1"> 
              <font class="item6">
              <img src={logo} className="App-logo" alt="logo" />
              學  習  寶
              </font>
                
              <font class="item3">
              
                職 業 指 南 寶 典
              </font>
            </font>
        </nav>
        <br/>
      <div class="box">
        <div class="item1">
        <div class="grid-item3">
                    <Link to='/future'class='item4-1'>未來職涯知識庫</Link>
                  </div>
              <br/>
                  <div class="grid-item3">

                    <Link to='/school' class='item4-1'>各校院圖譜</Link>
                  </div>
              <br/>
                  <div class="grid-item4">
                    <Link to='/personal'class='item4-1'>個人化學習歷程</Link>
                  </div>
        </div>
        <div class="item2">
                  自動化推薦
                  <br></br>
         
        </div>
      </div>
    </div>
          

      </div>
  )
}

const routeConfig = [
    {
        path: '/',
        element: <Home />,
    },
    { path: '/school', element: <School /> },
    { path: '/personal', element: <Personal /> },
    { path: '/future',element: <Future />,  },
]
const Index = () => {
    const element = useRoutes(routeConfig)
    return (
        <div className='page'>
            <div className='content'>{element}</div>
        </div>
    )
}

function App() {
    return (
        <div className='App'>
            <Router>
                {/* <Index /> */}
                <Routes>
                    <Route element={<Home />} path={'/'}></Route>
                    <Route element={<School />} path='/school'></Route>
                    <Route element={<Personal />} path='/personal'></Route>
                    <Route element={<Future />} path='/future'></Route>
                    <Route
                        path='*'
                        element={
                            <main style={{ padding: '1rem' }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </Router>
        </div>
    )
}
export default App
