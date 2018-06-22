var languageEnUs = {

  globals: {
      changePassword: "Change Password",
      logout: "Logout",
      back: "Back",
      edit: "Edit",
      new: "New",
      save: "Save",
      delete: "Delete",
      search: "Search",
      unblock: "Unblock",
      next: "Next",
      previous: "Previous",
      cancel: "Cancel",
      continue: "Continue",
      send: "Send",
      close: "Close",
      windows: {
        error: {
          title: "Processing Error",
          code: "Error Code",
          message: "Error Message"
        }
      },
      formValidation: {
        requiredField: "Please, fill out this field.",
        email: "Please, enter an email address.",
        url: "Please, enter a URL.",
        typeMismatch: "Please, use the correct input type.",
        tooShort: "Please, lengthen this text to {0} characters or more. You are currently using {1} characters.",
        tooLong: "Please, shorten this text to no more than {0} characters. You are currently using {1} characters.",
        badInput: "Please, enter a number.",
        stepMismatch: "Please, select a valid value.",
        rangeOverflow: "Please, select a value that is no more than {0}.",
        rangeUnderflow: "Please, select a value that is no less than {0}.",
        patternMismatch: "Please, match the requested format."
      },
      table: {
        info: "Showing page _PAGE_ of _PAGES_",
        search: "Filter:",
        searchPlaceholder: "Filter records",
        zeroRecords: "No records to display",
        lengthMenu: "Show _MENU_ entries",
        aria: {
          sortAscending: " - click/return to sort ascending",
          sortDescending: " - click/return to sort descending"
        },
        paginate: {
          next: "Next",
          previous: "Previous"
        }
      },
      messages: {
        required: "Campo obrigatório"
      }
  },

  header: {
      apptitle: "Inforlub Administrator"
  },

  footer: {
      copyright: "Copyright @ Abis - 2017 | 2018 - All rights reserved"
  },

  client: {
      title: {
        clientsManage: "Clients",
        clientsDetail: "Client Details",
        clientsSystem: "Edit System",
        clientsAccountManage: "Manage User Accounts",
        clientsAccountDetails: "User Account Details"
      },
      subtitle: {
        clientSystems: "Systems",
        workOrderReportSettings: "Work Order Report Settings",
        address: "Address",
        configuration: "Configuration",
        styleConfiguration: "Style Configuration",
        accountSystems: "Systems' Access Configuration"
      },
      action: {
        newSystem: "New System",
        userAccounts: "User Accounts"
      },
      attributes: {
        id: "Id",
        name: "Name",
        tradeName: "Trade Name",
        registerNumber: "Resgister Number",
        phone: "Telephone",
        email: "E-mail",
        site: "Site",
        isBlocked: "Blocked",
        logoUrl: "Logo Url",
        margins: "Margins",
        marginTop: "Top",
        marginBottom: "Bottom",
        marginLeft: "Left",
        marginRigth: "Right",
        pageType: "Page Type",
        address: "Address",
        city: "City",
        state: "State",
        zip: "Postal Code",
        system: {
          id: "Id",
          name: "Name",
          code: "Code",
          hasValidEula: "Has a valid Eula",
          url: "Url",
          countryId: "Country",
          legacyConfigurationId: "Legacy Configuration Id",
          returnImperialUnitData: "Return Imperial Unit Data",
          returnProductStandards: "Return Product Standards",
          returnImages: "Return Images",
          usesFixedIP: "Use Fixed IP",
          remoteHostIP: "Remote Host IP",
          useAlternativeViscosity: "Use Alternative Viscosity"
        },
        image: "Image",
        icon: "Icon",
        custom: "Custom",
        account: {
          id: "Id",
          name: "Name",
          email: "E-mail",
          password: "Password",
          disabled: "Disabled",
          blocked: "Blocked",
          preference: {
            countryId: "Country",
            languageId: "Language"
          },
          systemName: "System Name"
        }
      },
      messages: {
        clientInsertedSuccess: "Client created successfuly!",
        clientAlteredSuccess: "Client updated successfuly!",
        clientsUnblocked: "Client successfuly unblocked!",
        systemInsertedSuccess: "System created successfuly!",
        systemAlteredSuccess: "System updated successfuly!",
        clientNewSystem: "Create a new Client first to be able to create a new System.",
        accountInsertedSuccess: "Account created successfuly!",
        accountAlteredSuccess: "Account updated successfuly!"
      },
      placeholders: {
        name: "Client's Name",
        tradeName: "Client's Trade Name",
        registerNumber: "Client's Resgister Number",
        phone: "Client Telephone",
        email: "Client E-mail",
        site: "Client Site",
        logoUrl: "Logo Url Address",
        marginTop: "Top Margim size",
        marginBottom: "Bottom Margim size",
        marginLeft: "Left Margim size",
        marginRigth: "Right Margim size",
        pageType: "Page Type",
        address: "Address Information",
        city: "City",
        state: "State",
        zip: "Postal Code",
        system: {
          id: "System Id",
          name: "System Name",
          url: "System Url address",
          legacyConfigurationId: "Legacy System Configuration Id",
          remoteHostIP: "Remote Host IP",
        },
        styleImage: "Image Configuration",
        styleIcon: "Icon Configuration",
        styleCustom: "Custom Configuration",
        account: {
          id: "User's account Id",
          name: "User Name",
          email: "User E-mail"
        }
      }
  },

  eula: {
      title: {
        eulasManage: "Manage EULAs",
        eulasEdit: "Edit EULA"
      },
      subtitle: {
      },
      action: {
      },
      attributes: {
        id: "EULA Id",
        description: "End-User License Agreement",
        text: "EULA"
      },
      messages: {
        eulaInsertedSuccess: "EULA created successfuly!",
        eulaAlteredSuccess: "EULA updated successfuly!"
      }
  },

  protocol: {
    reportProtocols: {
      title: 'Protocols Report',
      clientName: "Client Name",
      api: "Api",
      systemName: "System Name",
      userName: "User Name",
      createdAtDate: "Created at",
      closedAtDate: "Closed at",
      closed: "Closed",
      sessionToken: "Session Token",
      id: "Id",
      userTitle: 'User',
      userId: 'User Id',
      userName: 'User Name',
      accountId: 'User Account',
      email: 'email',
      detailsTitle: 'Details',
      detailsYear: 'Year',
      detailsBrandId: 'Brand Id',
      detailsModelId: 'Model Id',
      detailsFuelId: 'Fuel Id',
      detailsEngineId: 'Engine Id',
      detailsVehicleTypeId: 'Vehicle Type Id',
      requestTitle: 'Request',
      requestApi: 'Api',
      requestDate: 'Date',
      requestIpAddress: 'IP Address',
      requestContentType: 'Content Type',
      requestUri: 'Uri'
    },
    protocolDetails: {
      title: 'Protocol Details',
      titleProtocol: 'Protocol'
    }
  },

  exception: {
    reportExceptionslog: {
      title: "Exceptions Log Report",
      startDate: "Start Date",
      endDate: "End Date",
      api: "Api",
      date: "Date",
      exceptionClassName: "Class",
      exceptionMessage: "Menssage",
    }
  }

}
