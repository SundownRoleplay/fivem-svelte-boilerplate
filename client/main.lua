local open = false

local function manageVisibility()
  open = not open
  
  SendNUIMessage({ action = 'setVisible', data = open })
  SetNuiFocus(open, open)
end

RegisterCommand('visibility', manageVisibility)