local open = false

local function manageVisibility(isVisible)  
  open = isVisible

  SendNUIMessage(
    { 
      action = "setComponentVisible", 
      data = {
        component = "",
        isVisible = isVisible
      } 
    }
  )

  SetNuiFocus(open, open)
end

RegisterNUICallback("getHealth", function(data, cb)
  cb({
    health = 150
  })
end)

RegisterCommand("visibility", function()
  manageVisibility(not open)
end)