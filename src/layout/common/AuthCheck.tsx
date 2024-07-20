import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useUserData from '@/Hooks/useUserData';

interface AuthCheckProps {
    children: ReactNode;
}

function AuthCheck({ children }: AuthCheckProps) {
    const location = useLocation()
    const { userData, isAdmin } = useUserData();
    if (!userData && location.pathname !== '/login') {
        return <Navigate to="/login" replace />;
    } else if (userData && location.pathname === '/login') {
        return <Navigate to="/dashboard" replace />;
    }

    if (location.pathname === '/dashboard/teachers') {
        if (isAdmin) {
            return children
        } else {
            return <Navigate to="/" replace />;
        }

    }
    return children;
}

export default AuthCheck