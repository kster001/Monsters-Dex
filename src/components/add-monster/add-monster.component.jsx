import { Fragment, useState, useRef} from "react";
import { useDispatch } from "react-redux";
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';
import { addNewMonster } from "../../store/monster/monster.action";
import { insertDataToDB } from "../../firebase/firestore";
import "./add-monster.styles.css";

const ValidationTextField = styled(TextField)({
    '& input:valid + fieldset': {
        borderColor: 'white',
        borderWidth: 2,
    },
    '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 2,
    },
    '& input:valid:hover + fieldset': {
        borderColor: '#1EB980',
        borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
        borderLeftWidth: 6,
        padding: '4px !important', // override inline-style
    },
  });

  const theme = createTheme({
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            color: 'white'
          },
        },
      },
    },
  });

const Add = () => {
    const dispatch = useDispatch();
    const name = useRef('');
    const powers = useRef('');
    const imageLink = useRef('');
    const [ isAdding, setIsAdding ] = useState(false);
    // const [ AddSuccess, setAddSuccess ] = useState(false);

    const handleClick = async () => {
        setIsAdding(true);
        const monster = {
            name: name.current.value,
            powers: powers.current.value,
            imageLink: imageLink.current.value
        }
        dispatch(addNewMonster(monster));
        await insertDataToDB(monster);
        setIsAdding(false);
        Swal.fire({
            icon: 'success',
            iconColor: '#1EB980',
            title: `Monster (${name.current.value}) Added successfully`,
            showConfirmButton: false,
            timer: 3000
        })
    }

    return (
        <Fragment>
            <h1 className='add-monster-title'>Add Character</h1>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <table>
                    <ThemeProvider theme={theme}>
                        <tbody>
                            <tr>
                                <td className="add-monster-label">Name: </td>
                            
                                    <td>
                                        <ValidationTextField
                                            variant="outlined"
                                            id="validation-outlined-input"
                                            inputRef={name}
                                        />
                                    </td>
                                
                            </tr>
                            <tr>
                                <td className="add-monster-label">Power(s): </td>
                                <td>
                                    <ValidationTextField
                                        variant="outlined"
                                        id="validation-outlined-input"
                                        inputRef={powers}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="add-monster-label">imageLink: </td>
                                <td>
                                    <ValidationTextField
                                        variant="outlined"
                                        id="validation-outlined-input"
                                        inputRef={imageLink}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </ThemeProvider>
                </table>
             
                <div className="add-field">
                    <Button 
                        variant="contained"
                        disabled={isAdding}
                        onClick={() => {handleClick()}}
                    >
                        {isAdding ? 'Adding':'Add'}
                    </Button>
                </div>
                {/* <h3>
                    {AddSuccess ? `Monster (${name.current.value}) Added successfully`: ''}
                </h3> */}
            </Grid>
            
          
            {/* <h1 className='add-monster-title'>Add Character</h1>
            <div>
            <div className="add-field">
                <label>Name: </label>
                <ValidationTextField
                    variant="outlined"
                    id="validation-outlined-input"
                    ref={name}
                />
            </div>
            <div className="add-field">
                <label>Power(s): </label>
                <ValidationTextField
                    variant="outlined"
                    id="validation-outlined-input"
                    ref={powers}
                />
            </div>
            <div className="add-field">
                <label>imageLink: </label>
                <ValidationTextField
                    variant="outlined"
                    id="validation-outlined-input"
                    ref={imageLink}
                />
            </div>
            <div className="add-field">
                <button 
                    disabled={isAdding}
                    onClick={() => {handleClick()}}>{isAdding ? 'Adding':'Add'}</button>
            </div>
            <h3>
                {AddSuccess ? `Monster (${name.current.value}) Added successfully`: ''}
            </h3>
            </div> */}
        </Fragment>
    );
}

export default Add;