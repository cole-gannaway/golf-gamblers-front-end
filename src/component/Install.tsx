import { Divider, Grid } from '@material-ui/core';
import PWAShareIconImage from '../common/install/pwa_share_menu_ios.jpeg'
import PWAInstallationImage from '../common/install/pwa_installation_ios.jpeg'
import PWAAddToHomeScreenImage from '../common/install/pwa_add_bookmark_ios.jpg'
import PWAInstalledImage from '../common/install/pwa_installed_ios.jpeg'

export default function Install() {
    return <div style={{ textAlign: "left" }}>
        <Grid container spacing={3}>
            <Grid item xs={1}>
                {/* Padding */}
            </Grid>
            <Grid item xs={10}>
                <p>
                    This application is a <b>P</b>rogressive <b>W</b>eb <b>A</b>pplication or <b>PWA</b> for short.<br></br>
                    Because of this, the aplication can be installed locally on phone or desktop computer.<br></br>
                    <br></br>
                    Note: Updates occur regularly and the app may need to be reinstalled
                </p>
                <Divider></Divider>
                <h3>Install PWA on IOS</h3>
                <h5>1. Select the share icon at the bottom</h5>
                <div>
                    <img src={PWAShareIconImage} alt="Error" width="200px"></img>
                </div>
                <h5>2. Select "Add to Home Screen"</h5>
                <div>
                    <img src={PWAAddToHomeScreenImage} alt="Error" width="200px"></img>
                </div>
                <h5>3. Select "Add"</h5>
                <div>
                    <img src={PWAInstallationImage} alt="Error" width="200px"></img>
                </div>
                <h5>Done!</h5>
                <div>
                    <img src={PWAInstalledImage} alt="Error" width="200px"></img>
                </div>
                <div>
                </div>
            </Grid>
            <Grid item xs={1}>
                {/* Padding */}
            </Grid>
        </Grid>

    </div>
}