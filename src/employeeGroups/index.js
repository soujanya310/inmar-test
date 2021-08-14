import React from'react';
import Button from '@material-ui/core/Button';
import CustomModal from '../components/modal/index';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import TableComponent from './table';
import ContactsTableComponent from './contactsTable';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import * as actions from './actions';
import {useDispatch,useSelector} from 'react-redux';
// import Modal from '@material-ui/core/Modal';
// import Fade from '@material-ui/core/Fade';

export default function EmployeeGroups(props){

    const dispatch = useDispatch();
    const groupsList = useSelector(state => state.GroupsData.groupsData)
    const contactsList = useSelector(state => state.GroupsData.contactsData)
    const [showAddGroup, setShowAddGroup] = useState(false);
    // const [groupData,setGroupData] = useState([])
    const [groupName, setGroupName] = useState("")
    const [modalStatus, setModalStatus] = useState(true)
    const [currentShown,setCurrentShown] = useState("Groups")
    const [selectedGroupName, setSelectedGroupName] = useState('')
    const [showAddContact, setShowAddContact] = useState(false);
    const [editGroupIndex,setEditGroupIndex] = useState(null);
    const [contactDetails, setContactDetails] = useState({
        personName: '',
        email:'',
        phone:'',
        address:''
    })
    const [editContactIndex,setEditContactIndex] = useState(null)


    const onCreateContactFields = (e) => {
        let tempObj = contactDetails;
        tempObj[e.target.name] = e.target.value
        setContactDetails(tempObj)
        
    }

    const onCreateGroupClick = () => {
        setShowAddGroup(true)
    }

    const onCreateContactClick = () => {
        setShowAddContact(true)
    }

    const handleDeleteGroup = (index) => {
        let data = [...groupsList];
        data.splice(index,1)
        // console.log(data,"deleted array")
        // window.alert("successfully deleted the group")
        dispatch(actions.groupDeleteRequest(data))
    }

    const habdleEditContact = (index) => {
        setEditContactIndex(index)
        setShowAddContact(true)
        setContactDetails(contactsList[index])
    }

    const handleDeleteContact = (index) => {
        let data = [...contactsList];
        data.splice(index,1)
        dispatch(actions.contactDeleteRequest(data))
    }

    const habdleEditGroup = (index) => {
        setEditGroupIndex(index)
        setShowAddGroup(true)
        setGroupName(groupsList[index].groupName)
        setModalStatus(groupsList[index].groupStatus)
    }

    const handleAddGroup = () => {
        if(!groupName && !modalStatus){
            window.alert("fields can not be empty")
        }
        else{
            if(editGroupIndex !== null){
                let data= groupsList;
                data[editGroupIndex].groupName = groupName;
                data[editGroupIndex].groupStatus = modalStatus;
                dispatch(actions.groupDeleteRequest(data))
            }
            else{
                let data = {
                    groupName: groupName,
                    groupStatus: modalStatus
                }
                dispatch(actions.groupAddRequest(data))
            }
            // window.alert("successfully added the group")
            setShowAddGroup(false)
            setGroupName("")
            setModalStatus(true)
        }
    }

    const handleAddContact = () => {
        if(!contactDetails.personName && !contactDetails.email && !contactDetails.phone){
            window.alert("fields can not be empty")
        }
        else{
            if(editContactIndex !== null){
                // let data= groupsList;
                // data[editGroupIndex].groupName = groupName;
                // data[editGroupIndex].groupStatus = modalStatus;
                // dispatch(actions.groupDeleteRequest(data))
            }
            else{
                dispatch(actions.contactAddRequest(contactDetails))
            }
            // window.alert("successfully added the group")
            setShowAddContact(false)
            setContactDetails({
                personName: '',
                email:'',
                phone:'',
                address:''
            })
            // setGroupName("")
            // setModalStatus(true)
        }
    }

    const onAddGroupName = (e) => {
        setGroupName(e.target.value)
    }

    const onStatusChangeinMOdal = (e) => {
        setModalStatus(e.target.checked)
    }

    const onGroupItemClick = (gName) => {
        setCurrentShown("Contacts")
        setSelectedGroupName(gName)
        // props.history.push(`${gName}/contacts`)
    }

    const onSearchGroups = (e) => {
        dispatch(actions.groupSearchRequest(e.target.value))
    }

    const onSearchContacts = (e) => {
        dispatch(actions.contactSearchRequest(e.target.value))
    }

    const customModalAddGroupProps={
        open: showAddGroup,
        model_name: "Add Group",
        handleClose:()=>{setShowAddGroup(false);setGroupName("");setModalStatus(true)},
        handleAccept: ()=>handleAddGroup()
    }
    
    const customModalAddContactProps={
        open: showAddContact,
        model_name: "Add Contact",
        handleClose:()=>{setShowAddContact(false)},
        handleAccept: ()=>handleAddContact()
    }

    return(
        <div className="table-options" style={{padding: '20px',marginRight:'20%',marginLeft:'20%'}}> 
           <h1 style={{textAlign:'center'}}>Inmar Manage Contacts Application</h1>
           {currentShown === "Groups" ? 
            <div>
               <div className="table-header" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                    <h3>
                        Groups:
                    </h3>
                    <div>
                    <div className="table-buttons" style={{display:'flex'}}>
                        <Paper component="form" style={{marginRight:'10px'}} >
                            <InputBase style={{padding:'6px'}}
                                // className={classes.input}
                                placeholder="Search"
                                inputProps={{ 'aria-label': 'search google maps' }}
                                onChange={(e)=>onSearchGroups(e)}
                            />
                            <IconButton type="submit" aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                        <Button
                            // type="submit"
                            // fullWidth
                            className="create-group-button"
                            variant="contained"
                            color="primary"
                            onClick={()=>onCreateGroupClick()}
                            // className={classes.submit}
                        >
                            Create Group
                        </Button>
                    </div>
                    <CustomModal modalProps={customModalAddGroupProps}>
                        <Form.Group style={{ marginBottom: '8px',display:'flex',flexDirection:'column' }}>
                            <Form.Label>Group Name</Form.Label>
                            <Form.Control 
                                style={{width:'80%',height:'30px',marginTop:'12px'}} 
                                value={groupName} type="text" 
                                onChange={(e) => onAddGroupName(e)} 
                            />
                        </Form.Group>
                        <Form.Group style={{display:'flex',alignItems:'center'}}>
                            <div>Status</div>
                            <div style={{marginLeft:'40px'}}>
                                <Switch
                                    checked={modalStatus}
                                    onChange={(e)=>onStatusChangeinMOdal(e)}
                                    color="primary"
                                    name="checkedB"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </div>
                        </Form.Group>
                    </CustomModal>
                </div>
                </div>
                <div style={{marginTop:'10px'}}>
                    <TableComponent 
                        onGroupItemClick={onGroupItemClick} 
                        groupsList={groupsList}
                        handleDeleteGroup={(index)=>handleDeleteGroup(index)}
                        habdleEditGroup={(index)=>habdleEditGroup(index)}
                    />
                </div>
            </div>
            :
            <div>
               <div  className="table-header" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                    <h3>
                       {selectedGroupName} Contacts
                    </h3>
                    <div>
                        <div className="table-buttons" style={{display:'flex'}}>
                            <Paper component="form" style={{marginRight:'10px'}} >
                                <InputBase style={{padding:'6px'}}
                                    // className={classes.input}
                                    placeholder="Search"
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                    onChange={(e)=>onSearchContacts(e)}
                                />
                                <IconButton type="submit" aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                            <Button
                                // type="submit"
                                // fullWidth
                                className="create-group-button"
                                variant="contained"
                                color="primary"
                                onClick={()=>onCreateContactClick()}
                                // className={classes.submit}
                            >
                                Create Contact
                            </Button>
                        </div>
                        <CustomModal modalProps={customModalAddContactProps}>
                            <Form.Group style={{ marginBottom: '8px',display:'flex',flexDirection:'column' }}>
                                <Form.Label>Person Name</Form.Label>
                                <Form.Control style={{width:'80%',height:'30px',marginTop:'12px'}} name="personName" type="text" onChange={(e) => onCreateContactFields(e)} />
                            </Form.Group>
                            <Form.Group style={{ marginBottom: '8px',display:'flex',flexDirection:'column' }}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control style={{width:'80%',height:'30px',marginTop:'12px'}}  name="email" type="email" onChange={(e) => onCreateContactFields(e)} />
                            </Form.Group>
                            <Form.Group style={{ marginBottom: '8px',display:'flex',flexDirection:'column' }}>
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control style={{width:'80%',height:'30px',marginTop:'12px'}} name="phone" type="number" onChange={(e) => onCreateContactFields(e)} />
                            </Form.Group>
                            <Form.Group style={{ marginBottom: '8px',display:'flex',flexDirection:'column' }}>
                                <Form.Label>Address</Form.Label>
                                <Form.Control style={{width:'80%',height:'30px',marginTop:'12px'}} name="address" type="text" onChange={(e) => onCreateContactFields(e)} />
                            </Form.Group>
                        </CustomModal>
                    </div>
                </div>
                <div style={{marginTop:'10px'}}>
                    <ContactsTableComponent
                        contactsList={contactsList}
                        handleDeleteContact={(index)=>handleDeleteContact(index)}
                        handleEditContact={(index)=>habdleEditContact(index)}
                    />
                </div>
            </div>
            }
        </div>
    )
}
