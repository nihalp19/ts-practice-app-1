import React, { useEffect, useState } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from './components/ui/input'





const FirstPage = () => {

    const [isDialougeOpen, setDialougeOpen] = useState(false)
    const [openJoinDialouge, setOpenJoinDialouge] = useState(false)
    const [isJoining, setIsJoining] = useState(false)


    useEffect(() => {
        const openDialougeBox = () => {
            setDialougeOpen(true)
        }
        openDialougeBox()
    }, [])



    return (
        <div>
            <AlertDialog open={isDialougeOpen} onOpenChange={setDialougeOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Join a room or make one.</AlertDialogTitle>
                        <AlertDialogDescription>
                            Share the code with the person you want to chat with
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Create</AlertDialogCancel>
                        <AlertDialogAction onClick={() => setOpenJoinDialouge(true)}>Join</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>


            <AlertDialog open={openJoinDialouge} onOpenChange={setOpenJoinDialouge}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Enter The Room Code</AlertDialogTitle>
                        <AlertDialogDescription>
                                <Input/>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setIsJoining(true)}>Join</AlertDialogCancel>
                        <AlertDialogAction onClick={() => setIsJoining(false)}>Cancel</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default FirstPage