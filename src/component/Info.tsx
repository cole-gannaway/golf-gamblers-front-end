import AppConfigInfo from '../config/app.config.json'
export default function Info() {
    return <div>
        <div>
            <h2>App Version</h2>
            <div>{AppConfigInfo.version}</div>
        </div>
    </div>
}