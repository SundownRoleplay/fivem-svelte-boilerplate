/**
 * @param eventName - The endpoint eventname to target
 * @param data - Data you wish to send in the NUI Callback
 *
 * @returns returnData - A promise for the data sent back by the NuiCallbacks CB argument
 */

export async function fetchNui<T = any>(
 eventName: string,
 data: unknown = {}
): Promise<T> {
 try {
   const options: RequestInit = {
     method: "POST",
     headers: {
       "Content-Type": "application/json; charset=UTF-8",
     },
     body: JSON.stringify(data),
   };

   const resourceName = (window as any).GetParentResourceName
     ? (window as any).GetParentResourceName()
     : "nui-frame-app";

   const response = await fetch(`https://${resourceName}/${eventName}`, options);

   return await response.json();
 } catch (error) {
   // Handle any errors that occur during the fetch
   console.error("Fetch error:", error);
   throw error; // Propagate the error to the caller
 }
}
