import React from 'react'
import {Popover} from '@headlessui/react'
import { X } from 'phosphor-react'

function CloseButton(){
    return(
        <Popover.Button className='top-5 right-5 text-zinc-400 hover:text-zinc-400 absolute' title='Fechar formulário de Feedback'>
            <X weight='bold' className='w-4 h-4'/>
        </Popover.Button>
    )
}


export {CloseButton}