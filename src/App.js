


import { Route, Routes } from 'react-router-dom';
import MainLayout from './component/common/MainLayout';
import { Dashboard } from './component/pages/dashboard';
import  {LeaveForm}  from './component/pages/leaveform';
import SignIn from './component/pages/signin';
import SignUp from './component/pages/signup/Signup';

function App() {

  return (
    <div className="App">
      <MainLayout/>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/login" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/leaveform" element={<LeaveForm />} />
      </Routes>
    </div>
  );
}

export default App;
