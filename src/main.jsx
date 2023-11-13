import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { store, persistor } from './redux/store'
import { Provider } from 'react-redux'
import ManagerAdmin from './component/Admin/ManagerAdmin/ManagerAdmin.jsx'
import CreateAdmin from './component/Admin/ManagerAdmin/CreateAdmin.jsx'
import EditAdmin from './component/Admin/ManagerAdmin/EditAdmin.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import FlyCancel from './component/Admin/FlyCancel/FlyCancel.jsx'
import ListFlight from './component/Admin/ListFlight/ListFlight.jsx'
import CustomerInfo from './component/Admin/Customer-info/CustomerInfo.jsx'
import CreateFlight from './component/Admin/ListFlight/CreateFlight.jsx'
import EditFlight from './component/Admin/ListFlight/EditFlight.jsx'
import Home from './component/Admin/pages/Home.jsx'
import Main from './component/Admin/layout/Main.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />}>
                        <Route index element={<Home />} />
                        <Route path='/admins/employee' element={<ManagerAdmin />} />
                        <Route path='/admins/employee/create' element={<CreateAdmin />} />
                        <Route path='/admins/employee/edit' element={<EditAdmin />} />
                        <Route path='/admins/flyCancel' element={<FlyCancel />} />
                        <Route path='/admins/flight' element={<ListFlight />} />
                        <Route path='/admins/flight/create' element={<CreateFlight />} />
                        <Route path='/admins/flight/edit' element={<EditFlight />} />
                        <Route path='/admins/customer-info' element={<CustomerInfo />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </PersistGate>
    </Provider>
)
