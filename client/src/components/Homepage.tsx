import { Button } from "@mui/material"
import { Stack } from "@mui/system"

export const Homepage = () => {
  return (
    <Stack spacing={5} direction="row" alignItems="center">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        <Button variant="contained">Sign In</Button>
        <Button variant="contained">Sign Up</Button>
    </Stack>
  )
}

