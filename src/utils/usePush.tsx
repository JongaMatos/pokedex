import { useHistory } from "react-router-dom";

export default function usePush() {
    const history = useHistory();

    const push = (url: string) => { history.push(url) }
    return push;

}
