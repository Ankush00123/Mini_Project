import { importGoalState } from "../store/features/goalSlice";
import { importSubjectState } from "../store/features/subjectSlice";
import { importUserState } from "../store/features/userSlice";


export const exportUserData = (userState, goalState, subjectState) =>
{
    const savedData = {
        userState, 
        goalState, 
        subjectState,
        exportDate: new Date().toISOString()
    }

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(savedData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `${userState.name}_backup_${new Date().toISOString().split('T')[0]}.stc`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

export const importUserData = (e, dispatch) => 
{
    const fileReader = new FileReader(); 
    if (e.target.files[0]) {
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = (event) =>
        {
            try {
                const parseData = JSON.parse(event.target.result);
                dispatch(importUserState(parseData.userState));
                dispatch(importGoalState(parseData.goalState));
                dispatch(importSubjectState(parseData.subjectState));
            }
            catch (e)
            {
                alert("Invalid file");
            }
        }
    }
}