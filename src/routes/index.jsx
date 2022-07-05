import React, { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Detail from '../pages/Detail'

import Home from '../pages/Home'
const ListenBook = lazy(()=>import('../pages/ListenBook'))
const RankList = lazy(()=>import('../pages/RankList'))

export default function Router() {
    return (
        <Suspense fallback={<>loading...</>}>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/book' element={<ListenBook/>}/>
                <Route path='/rank' element={<RankList/>}/>
                <Route path='/detail' element={<Detail/>}/>
                <Route path='/' element={<Navigate to='/home'/>}/>
            </Routes>
        </Suspense>
    )
}