local open = false

local function manageVisibility()
  open = not open
  
  SendNUIMessage({ action = 'setVisible', data = open })
  SetNuiFocus(open, open)
end

RegisterNUICallback('hideUI', function(data, cb)
  open = not open

  SetNuiFocus(open, open)

  cb({ ok = true })
end)

RegisterCommand('visibility', manageVisibility)