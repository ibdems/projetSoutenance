import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <section className="footer_section">
            <div className="container">
                <p className='text-center'>
                    © <span id="displayYear" /> Tout droit reservé
                    <Link> Genie Logiciel 2023-2024</Link>
                </p>
            </div>
        </section>
    )
}
