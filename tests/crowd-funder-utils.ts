import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  CampaignAdded,
  CampaignFunded,
  CampaignPublished,
  CampaignRemoved,
  CampaignShrunk,
  UserAdded
} from "../generated/CrowdFunder/CrowdFunder"

export function createCampaignAddedEvent(
  _campaignAddress: Address,
  _creator: Address,
  _title: string,
  _description: string,
  _category: string,
  _tags: string,
  _imageURI: string
): CampaignAdded {
  let campaignAddedEvent = changetype<CampaignAdded>(newMockEvent())

  campaignAddedEvent.parameters = new Array()

  campaignAddedEvent.parameters.push(
    new ethereum.EventParam(
      "_campaignAddress",
      ethereum.Value.fromAddress(_campaignAddress)
    )
  )
  campaignAddedEvent.parameters.push(
    new ethereum.EventParam("_creator", ethereum.Value.fromAddress(_creator))
  )
  campaignAddedEvent.parameters.push(
    new ethereum.EventParam("_title", ethereum.Value.fromString(_title))
  )
  campaignAddedEvent.parameters.push(
    new ethereum.EventParam(
      "_description",
      ethereum.Value.fromString(_description)
    )
  )
  campaignAddedEvent.parameters.push(
    new ethereum.EventParam("_category", ethereum.Value.fromString(_category))
  )
  campaignAddedEvent.parameters.push(
    new ethereum.EventParam("_tags", ethereum.Value.fromString(_tags))
  )
  campaignAddedEvent.parameters.push(
    new ethereum.EventParam("_imageURI", ethereum.Value.fromString(_imageURI))
  )

  return campaignAddedEvent
}

export function createCampaignFundedEvent(
  _funder: Address,
  _campaignAddress: Address,
  _val: BigInt,
  _c_creator: Address
): CampaignFunded {
  let campaignFundedEvent = changetype<CampaignFunded>(newMockEvent())

  campaignFundedEvent.parameters = new Array()

  campaignFundedEvent.parameters.push(
    new ethereum.EventParam("_funder", ethereum.Value.fromAddress(_funder))
  )
  campaignFundedEvent.parameters.push(
    new ethereum.EventParam(
      "_campaignAddress",
      ethereum.Value.fromAddress(_campaignAddress)
    )
  )
  campaignFundedEvent.parameters.push(
    new ethereum.EventParam("_val", ethereum.Value.fromUnsignedBigInt(_val))
  )
  campaignFundedEvent.parameters.push(
    new ethereum.EventParam(
      "_c_creator",
      ethereum.Value.fromAddress(_c_creator)
    )
  )

  return campaignFundedEvent
}

export function createCampaignPublishedEvent(
  _campaignAddress: Address,
  _creator: Address
): CampaignPublished {
  let campaignPublishedEvent = changetype<CampaignPublished>(newMockEvent())

  campaignPublishedEvent.parameters = new Array()

  campaignPublishedEvent.parameters.push(
    new ethereum.EventParam(
      "_campaignAddress",
      ethereum.Value.fromAddress(_campaignAddress)
    )
  )
  campaignPublishedEvent.parameters.push(
    new ethereum.EventParam("_creator", ethereum.Value.fromAddress(_creator))
  )

  return campaignPublishedEvent
}

export function createCampaignRemovedEvent(
  _campaignAddress: Address
): CampaignRemoved {
  let campaignRemovedEvent = changetype<CampaignRemoved>(newMockEvent())

  campaignRemovedEvent.parameters = new Array()

  campaignRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "_campaignAddress",
      ethereum.Value.fromAddress(_campaignAddress)
    )
  )

  return campaignRemovedEvent
}

export function createCampaignShrunkEvent(
  _withdrawer: Address,
  _campaignAddress: Address,
  _val: BigInt,
  _c_creator: Address
): CampaignShrunk {
  let campaignShrunkEvent = changetype<CampaignShrunk>(newMockEvent())

  campaignShrunkEvent.parameters = new Array()

  campaignShrunkEvent.parameters.push(
    new ethereum.EventParam(
      "_withdrawer",
      ethereum.Value.fromAddress(_withdrawer)
    )
  )
  campaignShrunkEvent.parameters.push(
    new ethereum.EventParam(
      "_campaignAddress",
      ethereum.Value.fromAddress(_campaignAddress)
    )
  )
  campaignShrunkEvent.parameters.push(
    new ethereum.EventParam("_val", ethereum.Value.fromUnsignedBigInt(_val))
  )
  campaignShrunkEvent.parameters.push(
    new ethereum.EventParam(
      "_c_creator",
      ethereum.Value.fromAddress(_c_creator)
    )
  )

  return campaignShrunkEvent
}

export function createUserAddedEvent(
  _address: Address,
  _username: string,
  _email: string,
  _shipAddress: string,
  _pfp: string
): UserAdded {
  let userAddedEvent = changetype<UserAdded>(newMockEvent())

  userAddedEvent.parameters = new Array()

  userAddedEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )
  userAddedEvent.parameters.push(
    new ethereum.EventParam("_username", ethereum.Value.fromString(_username))
  )
  userAddedEvent.parameters.push(
    new ethereum.EventParam("_email", ethereum.Value.fromString(_email))
  )
  userAddedEvent.parameters.push(
    new ethereum.EventParam(
      "_shipAddress",
      ethereum.Value.fromString(_shipAddress)
    )
  )
  userAddedEvent.parameters.push(
    new ethereum.EventParam("_pfp", ethereum.Value.fromString(_pfp))
  )

  return userAddedEvent
}
