local open = false

local function manageVisibility()
  open = not open
  
  SendNUIMessage({ action = 'setVisible', data = open })
  SetNuiFocus(open, open)
end

RegisterNUICallback('getHealth', function(data, cb)
  cb({ health = tostring(GetEntityHealth(PlayerPedId())) })
end)

RegisterCommand('visibility', manageVisibility)