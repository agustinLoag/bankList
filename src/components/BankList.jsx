import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getBankList } from '../redux/bankDucks';
import BankItem from './BankItem';


const BankList = () => {
    const dispatch = useDispatch();
    const banks = useSelector(store => store.banks.banksArray)
    const isLoading = useSelector(store => store.banks.fetching)
    console.log(banks);
    useEffect(() => {
        dispatch(getBankList())
    }, [])


    return (
        <div className='container'>
            <div className="row">
                
            {
                banks && banks.map((item, index) => (
                    <div className="col-md-4 col-sm-1 d-flex justify-content-center">
                        <BankItem bank={item}/>
                    </div>
                ))
            }
                
            </div>
        </div>
    )
}

export default BankList
