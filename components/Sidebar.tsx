'use client'
import { useState } from "react"
import Button from '@/components/Button';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(0);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return(
        <div style={{
            width: isOpen ? "200px" : "100px",
            transition:'width 0.3s',
            borderRight:'2px solid grey'
        }}>
            <Button text={isOpen ? "Collapse" : "Expand"}
            onClick={toggleSidebar}
            style={{marginBottom: '20px'}}></Button>
            <ul style={{listStyle:'none', padding:0}}>
                <li>Home</li>
                <li>Leads</li>
                <li>Campaigns</li>
                <li>Messages</li>
                <li>Linkedin Accounts</li>
            </ul>
        </div>
    )
}