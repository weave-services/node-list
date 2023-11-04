import Link from 'next/link'
// material-ui
import { ButtonBase } from '@mui/material'

// project imports
import config from 'config'
import Logo from 'ui-component/Logo'

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <ButtonBase disableRipple>
        <Link href={config.defaultPath}>
            <Logo />
        </Link>
    </ButtonBase>
)

export default LogoSection
