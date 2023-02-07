import { Button } from "@mui/material"
import { Stack } from "@mui/system"

export const Homepage = () => {
  return (
    <Stack spacing={5} direction="row" display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        <Button variant="contained">Sign In</Button>
        <Button variant="contained">Sign Up</Button>
    </Stack>
  )
}

