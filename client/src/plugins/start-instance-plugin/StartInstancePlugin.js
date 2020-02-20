/**
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership.
 *
 * Camunda licenses this file to you under the MIT; you may not use this file
 * except in compliance with the MIT License.
 */

import React, { PureComponent } from 'react';

import { Fill } from '../../app/slot-fill';

import PlayIcon from 'icons/Play.svg';

import { Button } from '../../app/primitives';

import css from './StartInstancePlugin.less';

export default class StartInstancePlugin extends PureComponent {

  onIconClicked() {

  }

  render() {

   return <React.Fragment>
    <Fill slot="toolbar" group="8_deploy" priority={ 0 }>
      <Button
        onClick={ this.onIconClicked }
        title="Start Current Diagram"
        className={ css.StartInstancePlugin }
      >
        <PlayIcon className="icon" />
      </Button>
    </Fill>
   </React.Fragment>
  }
}
