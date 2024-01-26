import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage";
import { CalendarPage } from "../calendar/pages/CalendarPage";

export const AppRouter = () => {

    const authStatus = 'authenticated'; //'not-authenticated'

    return (
        <Routes>
            {
                (authStatus === 'not-authenticated')
                    ? <Route path="/auth/*" element={<LoginPage />} />
                    : <Route path="/*" element={<CalendarPage />} />

            }

            {/* Ruta no definida */}
            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    )
}
